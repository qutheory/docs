<template>
  <!--<div class="search-box">-->
    <div class="search_container">
      <div class="search">
        <input
          id="query"
          @input="query = $event.target.value"
          aria-label="Search"
          :value="query"
          autocomplete="off"
          placeholder="Search..."
          spellcheck="false"
          @focus="focused = true"
          @blur="focused = false"
          @keyup.enter="go(focusIndex)"
          @keyup.up="onUp"
          @keyup.down="onDown"
        >
      </div>
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
      <li
        class="suggestion"
        v-for="(s, i) in suggestions"
        :class="{ focused: i === focusIndex }"
        @mousedown="go(i)"
        @mouseenter="focus(i)"
      >
        <a :href="s.path" @click.prevent>
          <span class="page-title">{{ s.title || s.path }}</span>
          <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.focused &&
        this.suggestions &&
        this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }
      console.log(this.$site)
      const { pages, themeConfig } = this.$site
      const max = themeConfig.searchMaxSuggestions || 5
      const localePath = this.$localePath
      const matches = item => (
        item.title &&
        item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.search_container
  position relative
  width: 100%
  max-width: 500px
  margin: 0px auto
  .suggestions
    width 480px!important
    background #fff
    width 20rem
    position absolute
    top 50px
    border 1px solid darken($borderColor, 10%)
    border-radius 6px
    padding 0.4rem
    list-style-type none
    &.align-right
      right 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    a
      color lighten($textColor, 35%)
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f3f4f5
      a
        color $accentColor

.search_container .search #query
  border 0px
  padding 20px 20px 20px 60px
  line-height 22px
  font-size 17.1px
  box-shadow 0px 9px 14px 0px rgba(0, 0, 0, 0.1)
  border-radius 8px
  transition-property all
  transition-duration 120ms
  color #2C2D30
  width 410px

.search_container .search #query:focus
  box-shadow 0px 8px 16px 0px rgba(0, 0, 0, 0.25)
  outline-width: 0;

.search_container .search:before
  font-family "Font Awesome 5 Free"
  content "\f002"
  font-style normal
  color #000
  font-weight 900
  text-decoration inherit
  display block
  position absolute
  z-index 15
  top 15px
  left 5px
  font-size 28px
  width 60px
  height 100%
  opacity 0.7
  transition-property all
  transition-duration 120ms
@media (max-width: $MQMobile)
  .search_container
    .suggestions
      width 270px!important
      left 10px
  .search_container .search
    max-width 300px
    #query
      max-width 200px
      cursor pointer
      border-color transparent
      position relative
      &:focus
        cursor text
  .search_container .search:before
    font-family "Font Awesome 5 Free"
    content "\f002"
    z-index 100
    font-style normal
    font-weight 900
    text-decoration inherit
    display block
    position absolute
    top 15px
    left 10px
    font-size 28px
    width 60px
    height 100%
    opacity 0.7
    transition-property all
    transition-duration 120ms

@media (max-width: $MQNarrow) and (min-width: $MQMobile)
  .search_container .search
    .suggestions
      left 0

@media (max-width: $MQMobile)
  .search_container .search
    margin-right 0
    .suggestions
      right 0

@media (max-width: $MQMobileNarrow)
  .search_container .search
    .suggestions
      width calc(100vw - 4rem)
    input:focus
      width 8rem
</style>
