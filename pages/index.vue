<template>
  <div class="container">
    <h2>Stage</h2>
    <div class="button-group">
      <button v-for="(val, key) in option.getFilterData" class="button" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
      </button>
    </div>
    <isotope ref="cpt" id="root_isotope1" :item-selector="element-item" :list="list" :options="option" @filter="filterOption=arguments[0]" >
      <div v-for="(element,index) in list" :class="element.date"  :key="index">
        <h3 class="name">{{element.name}}</h3>
        <p class="date">{{element.date}}</p>
        <p class="stage">{{element.stage}}</p>
      </div>
    </isotope>
  </div>
</template>

<script>
var count = 0;
export default {
  name: 'SectionProjects',
  data() {
   return {
    list: [{
      name: "Hatred",
      date: "d1",
      stage: "stage3"
    }, {
      name: "Svinkels",
      date: "d1",
      stage: "stage4"
    }, {
      name: "Iore",
      date: "d2",
      stage: "stage1"
    }, {
      name: "Patouf",
      date: "d2",
      stage: "stage2"
    }],
    currentLayout: 'masonry',
    selected: null,
    sortOption: "original-order",
    filterOption: "Show all stage",
    filter2Option: "Show all date",
    option: {
      itemSelector: ".element-item",
      getFilterData: {
        "show all date": function(el) {
          return el.date === "d1" || el.date === "d2";
        },
        date1: function(el) {
          return el.date === "d1";
        },
        date2: function(el) {
          return el.date === "d2";
        },
        "show all stage": function(el) {
          return el.stage === "stage1" || el.stage === "stage2" || el.stage === "stage3" || el.stage === "stage4";
        },
        stage1: function(el) {
          return el.stage === "stage1";
        },
        stage2: function(el) {
          return el.stage === "stage2";
        },
        stage3: function(el) {
          return el.stage === "stage3";
        },
        stage4: function(el) {
          return el.stage === "stage4";
        }
      }
    }
    }
  },
  methods: {
    filter: function(key) {
    	this.$refs.cpt.filter(key);
    }
  }
};
</script>
<style>
.projects .thumbnail { width: 243px; height: 149px; }
.projects .thumbnail .thumbnail-overlay { opacity: 0; background-color: rgba(black, 0.8);  transition: opacity 0.25s ease-in-out;}
.projects .thumbnail:hover .thumbnail-overlay { opacity: 1; }
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
