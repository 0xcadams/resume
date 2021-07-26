<template>
  <div class="resume">
    <div class="leftCol m_box">
      <div class="shadow"></div>
      <div class="heading" id="myselfpic" />
      <div class="section-headline">
        {{ lang.contact }}
      </div>

      <div class="item">
        <div class="icon">
          <i class="material-icons">home</i>
        </div>
        <div class="text">
          <ul>
            <li>{{ person.contact.street }}</li>
            <li>{{ person.contact.city }}</li>
          </ul>
        </div>
      </div>

      <a :href="'tel:' + person.contact.phone.replace(/\s/g, '')">
        <div class="item">
          <div class="icon">
            <i class="material-icons">phone</i>
          </div>
          <div class="text">
            {{ person.contact.phone }}
          </div>
        </div>
      </a>

      <a :href="'mailto:' + person.contact.email">
        <div class="item">
          <div class="icon">
            <i class="material-icons">email</i>
          </div>
          <div class="text">
            {{ person.contact.email }}
          </div>
        </div>
      </a>

      <a
        v-if="person.contact.github"
        :href="'https://github.com/' + person.contact.github"
        target="_blank"
      >
        <div class="item">
          <div class="icon">
            <i class="fa fa-github"></i>
          </div>
          <div class="text">
            <span>{{ person.contact.github }}</span>
          </div>
        </div>
      </a>

      <a
        v-if="person.contact.website"
        :href="'https://' + person.contact.website"
        target="_blank"
      >
        <div class="item">
          <div class="icon">
            <i class="material-icons">language</i>
          </div>
          <div class="text">
            <span>{{ person.contact.website }}</span>
          </div>
        </div>
      </a>

      <div class="item">
        <div class="section-headline">{{ lang.education }}</div>
        <div
          v-for="education in person.education.history"
          :key="education.degree"
        >
          <a :href="education.link" target="_blank" class="item">
            <div class="icon">
              <i :class="education.icon"></i>
            </div>
            <div class="education-text">
              <div class="education-desc">{{ education.description }}</div>
              <div class="education-loc">
                {{ education.location }}: {{ education.timeperiod }}
              </div>
              <!-- <br />
            <span class="education-sub">and</span>
            <br />
            <a :href="education.link2" target="_blank" class="education-desc">{{education.description2}}</a> -->
            </div>
          </a>
        </div>

        <div
          v-for="publication in person.education.publications"
          :key="publication"
        >
          <a :href="publication.link" target="_blank" class="item">
            <div class="icon">
              <i class="fa fa-pencil"></i>
            </div>
            <div class="education-text">
              <div class="education-desc">{{ publication.name }}</div>
            </div>
          </a>
        </div>
      </div>

      <div class="item last">
        <div class="section-headline last-section">
          {{ lang.skills }}
        </div>
        <div class="skill" v-for="skill in person.skills" :key="skill.name">
          <div class="right">
            <span>{{ skill.name }}</span>
            <div class="prog-outer-outer">
              <div class="prog-outer">
                <div :style="{ width: skill.level + '%' }" class="prog"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="rightCol">
      <div class="title">
        <h2>{{ person.name.first }} {{ person.name.last }}</h2>
      </div>

      <div class="section-headline">{{ lang.experience }}</div>
      <div class="blocks">
        <div
          class="block"
          v-for="experience in person.experience"
          :key="experience.company"
        >
          <div class="block-helper"></div>
          <div class="headline-block" :href="experience.link">
            <a class="avatar-parent" :href="experience.link">
              <img :src="experience.photo" class="avatar" />
            </a>
            <div class="headlines">
              <h3 class="headline">
                {{ experience.position }}: {{ experience.company }}
              </h3>
              <div class="subheadline">{{ experience.timeperiod }}</div>
            </div>
          </div>
          <p class="info">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </div>

    <div style="clear:both;"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';
let name = 'chase-adams-resume';

export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.resume {
  font-family: "Open Sans" !important;
  background: #efefef;
}
a {
  cursor: pointer;
}
.description-personal {
  margin-left: 20px;
  margin-top: 20px;
  padding-right: 40px;
  text-align: justify;
  font-family: "Open Sans";
}
.title {
  right: 25px;
  padding-left: 20px;
  padding-top: 5px;
  bottom: 25px;
  h2 {
    text-transform: uppercase;
    display: block;
    font-size: 1.75em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    color: white;
    color: rgba(0, 0, 0, 0.7);
    padding-top: 0;
    margin-top: 0;
    font-weight: 700;
  }
}
.section-headline {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 12pt;
  opacity: 0.8;
  margin-left: 20px;
  // margin-top:5px;
  // margin-bottom:5px;
  color: #3f3d3c;
}
.c {
  clear: both;
}
.progress-bar {
  background-color: #15b097 !important;
}
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding-top: 9px;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p {
  margin-top: 0;
  margin-bottom: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 10pt;
  line-height: 14pt;
}
.m_box {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.fa,
.material-icons {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 26px;
}
h1,
h3,
h5,
h6 {
  font-weight: 400;
  margin: 0;
}
h2 {
  font-weight: 700;
  margin: 0;
  font-size: 22pt;
  line-height: 37pt;
}
h4 {
  font-weight: 400;
  margin: 0;
  font-size: 12pt;
  line-height: 20pt;
  opacity: 1;
}
.rightCol {
  width: 74.5%;
  height: 100%;
  float: right;
  .blocks {
    display: flex;
    flex-wrap: wrap;
    .block {
      width: 88%;
      position: relative;
      background-color: #ffffff;
      border-radius: 6px;
      padding: 14px;
      margin-top: 7px;
      margin-bottom: 0px;
      margin-right: 5px;
      display: inline-block;
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16),
        0 2px 3px 0 rgba(0, 0, 0, 0.12);
      .headline-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        margin-bottom: 2px;
        align-items: center;
        .avatar-parent {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          border-radius: 50%;
          background-color: #000000;
          padding: 3px;
          .avatar {
            height: 100%;
            width: 100%;
            text-align: center;
            object-fit: contain;
            border-radius: 50%;
            // background-size: cover;
            // background-position: top center;
          }
        }
        .headlines {
          .headline {
            font-weight: 500;
            width: 100%;
            display: block;
            font-size: 13px;
            color: rgba(0, 0, 0, 0.870588);
          }
          .subheadline {
            color: rgba(0, 0, 0, 0.541176);
            display: block;
            font-size: 12px;
            font-weight: 500;
          }
        }
      }
      .info {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        padding-top: 5px;
      }
      .icon {
        width: 16%;
        float: left;
        margin-left: 0;
        .fa,
        .material-icons {
          text-align: center;
          display: block;
          font-size: 30pt;
        }
      }
      .content {
        width: 80%;
        position: absolute;
        height: 96%;
        left: 17%;
        padding-right: 3%;
        text-align: left;
        display: flex;
        flex-direction: column;
        .item {
          border-bottom: 1px solid #bdbdbd;
          flex: 1;
          width: 97%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          padding-top: 0;
          span {
            color: #d8ab94;
            margin-top: 0;
            font-size: 10pt;
            line-height: 16pt;
          }
          p {
            margin-top: 5px;
          }
        }
        .item:last-of-type {
          border-bottom-style: none;
          border-bottom-style: none;
        }
      }
    }
  }
}
.leftCol {
  width: 190px;
  height: 100%;
  float: left;
  padding: 0;
  text-align: left;
  color: #ffffff;
  color: rgba(255, 255, 255, 0.59);
  background-color: #101e38;
  overflow: hidden;
  display: block;
  .section-headline {
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.54);
  }
  a {
    color: rgba(255, 255, 255, 0.59);
    text-decoration: none;
  }
  .heading {
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: 190px;
  }
  .item {
    width: 100%;
    margin-top: 8px;
    float: left;
    display: flex;
    padding-left: 5px;
    // justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .last-section {
      margin-bottom: 10px;
    }
    .fa,
    .material-icons {
      display: inherit;
      text-align: center;
    }
    .icon {
      width: 20%;
      float: left;
    }
    .text {
      float: right;
      // width:69%;
      padding-right: 10%;
      // padding-top:4px;
      display: block;
      font-size: 15px;
      font-weight: 300;
      li {
        padding-top: 0;
        display: block;
        font-size: 13px;
        font-weight: 300;
      }
    }
    .education-loc {
      // opacity:0.85;
      letter-spacing: 0.08333em;
      text-transform: uppercase;
      padding-top: 5px;
      font-size: 11px;
      font-weight: 100;
    }
    .education-text {
      float: right;
      width: 67%;
      padding-right: 7%;
      padding-left: 5%;
      // padding-top:4px;
      display: block;
      font-weight: 300;
      .education-sub {
        opacity: 0.7;
        padding-left: 5%;
        padding-top: 5px;
        font-size: 11px;
        font-weight: 300;
      }
      .education-desc {
        font-size: 13px;
        font-weight: 100;
        padding-right: 5%;
      }
    }
    span {
      font-weight: 300;
    }
    .skill {
      clear: both;
      width: 94%;
      font-size: 12px;
      .left {
        float: left;
        width: 10%;
        padding-top: 3px;
        i:nth-child(2) {
          float: left;
          padding-top: 4px;
        }
      }
      .right {
        float: right;
        width: 93%;
        .prog-outer-outer {
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 10px;
          .prog-outer {
            height: 5px;
            // padding-top:7px;
            padding-right: 7px;
            background-color: #3f3d3c;
            border-radius: 5px;
            .prog {
              background-color: #15b097;
              width: 60%;
              height: 5px;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
  .item.last .text {
    border-bottom-style: none;
    padding-bottom: 0;
  }
}
#myselfpic {
  background-image: url("../../resume/headshot.jpg");
  background-color: #15b097;
  margin-bottom: 10px;
}
#githubIcon {
  width: 25px;
  padding-left: 17px;
}
</style>
