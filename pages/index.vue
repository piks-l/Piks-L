<template lang="pug">
  .container
    .row
      .col-md-4.py-5
        ul.list-unstyled.mb-0
          li(v-for="(val, key) in option.getFilterData" ).mb-3
            div(
              :class="[key === filterOption ? 'text-success' : 'text-white']"
              @click="filter(key)",
            ).cursore-pointer {{ key }}

      .col-md-8.d-flex
        .m-auto.w-100
          no-ssr
            isotope(
              ref='projects'
              :options="option",
              :list="projects"
            )
              div(v-for="(item, index) in projects", :key="index").text-white.thumbnail
                div.cursore-pointer.d-block.pos-r.p-1
                  img(:src="require(`../assets/images/project-thumbnails/${item.thumbnail}`)").w-100
                  .pin.pin-xy.d-flex.text-white.thumbnail-overlay
                    .m-auto.fs-16.text-center {{ item.title }}
</template>

<script>
export default {
  name: 'SectionProjects',
  data() {
    return {
      filterOption: 'Show All',

      option: {
        getFilterData: {
          'Show All'() {
            return true;
          },
          'Production Housing'(itemElem) {
            return itemElem.categories.map(x => x === 'Production Housing').includes(true);
          },
          'Remodel Design'(itemElem) {
            return itemElem.categories.map(x => x === 'Remodel Design').includes(true);
          },
          'Commercial Buildings'(itemElem) {
            return itemElem.categories.map(x => x === 'Commercial Buildings').includes(true);
          },
          'Land Planning'(itemElem) {
            return itemElem.categories.map(x => x === 'Land Planning').includes(true);
          },
        },
      },

      projects: [
        {
          title: 'Natomas Meadows Clubhouse',
          thumbnail: 'natomas-meadows-clubhouse.png',
          categories: ['Commercial Buildings', 'Land Planning'],
        }, {
          title: 'Donner Lake Remodel',
          thumbnail: 'donner-lake-remodel.png',
          categories: ['Remodel Design'],
        }, {
          title: 'Havenwood',
          thumbnail: 'havenwood.png',
          categories: ['Production Housing'],
        },
      ],
    };
  },

  methods: {
    filter(key) {
      if (this.filterOption !== key) {
        this.$refs.projects.filter(key);
        this.filterOption = key;
      }
    },
  },
};
</script>
<style>
  #biographie {
    height: 90vh;
    display: table;
    width: 100%;
  }
  #biographie .container{
    display: table-cell;
    vertical-align: middle;
  }

  .bloc {
      position: relative;
      width: 50%;
      display: inline-block;
      padding: 15px;
      vertical-align: middle;
  }
  .bloc .font-logo {
      max-width: 100%;
      max-height: 100%;
      position: relative;
  }
#container {
  border: 1px solid;
  padding: 3px;
}

.item {
  width: 70px;
  height: 70px;
  margin: 3px;
  float: left;
}

.item.large {
  width: 146px;
  height: 146px;
}

.red { background: red; }
.blue { background: blue; }
.green { background: green; }
.yellow { background: yellow; }

/* Start: Recommended Isotope styles */

/**** Isotope Filtering ****/

.isotope-item {
  z-index: 2;
}

.isotope-hidden.isotope-item {
  pointer-events: none;
  z-index: 1;
}

/**** Isotope CSS3 transitions ****/

.isotope,
.isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
     -moz-transition-duration: 0.8s;
          transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
     -moz-transition-property: height, width;
          transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
     -moz-transition-property:    -moz-transform, opacity;
          transition-property:         transform, opacity;
}

/**** disabling Isotope CSS3 transitions ****/

.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
  -webkit-transition-duration: 0s;
     -moz-transition-duration: 0s;
          transition-duration: 0s;
}

/* End: Recommended Isotope styles */

  @media only screen and (min-width:960px) and (max-width:1264px){

  }
  @media only screen and (min-width:600px) and (max-width:959px){

  }
  @media only screen and (max-width:599px){

  }
</style>
