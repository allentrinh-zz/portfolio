<template>
  <div id="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="year"><span>{{ item.year }}</span></div>
      <div class="timeline-inner">
        <div class="columns">
          <div class="column is-4 is-large">
            <h4 class="position">{{ item.position }}</h4>
            <p class="company-link"><a :href="item.url" target="_blank">{{ item.company }} <i class="fa fa-external-link"></i></a></p>
          </div>
          <div class="column is-large">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
  data() {
    return {
      items: [
        {
          year: 2014,
          company: 'Resite Online',
          url: 'https://www.resiteonline.com',
          position: 'Lead Developer',
          description: 'Joining a team of "many hats", I encountered challenges that only propelled my own abilities for problem solving beyond design and development. I discovered a true love for marketing. Along side marketing, I discovered true passion for software development and the joys of optimization.',
        },
        {
          year: 2013,
          company: 'Dominion Enterprises',
          url: 'https://www.dominionenterprises.com',
          position: 'Web Designer',
          description: 'Transitioning from a broad spectrum of customers to a more focused group, I found growth in my own abilities here for marketing. The targets were power sports and the clients were retailers.',
        },
        {
          year: 2012,
          company: 'InMotion Hositng',
          url: 'https://www.inmotionhosting.com',
          position: 'Web Designer',
          description: 'Fresh out of school and into the real world of customer web support. Simple web updates were not enough for me and my hunger showed as it didn\'t take long for my team to realize I was meant for bigger projects. Soon, I was responsible for taking new clients ranging from health to charity and restaurants to fitness, and building their dreams in the forms of WordPress or OpenCart.',
        },
        {
          year: 2009,
          company: 'ECPI University',
          url: 'https://www.ecpi.edu',
          position: 'Student',
          description: 'There isn\'t much to say about an aspiring developer other than I chose the formal education route to rocket my career in the right direction. Graduating in 2012, I was ready for the world.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.timeline-item {
  margin-bottom: 1em;
  padding-left: 6em;
  position: relative;
}

.timeline-inner {
  background: $primaryColor;
  padding: 1.5em 2em;
  border-radius: 2px;
  position: relative;
  @include box-shadow;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 20px 20px 0;
    border-color: transparent $primaryColor transparent transparent;
    position: absolute;
    top: 1.6em;
    right: 100%;
  }
}

.position {
  color: #fff;
  margin-bottom: 0.5em;
}

.company-link {
  font-size: 0.85em;
  font-style: italic;
}

.year {
  position: absolute;
  top: 0.75em;
  left: 0;
  font-size: 1.25em;
  font-weight: bold;
  font-family: $heading;
  background: $complementaryColor;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 0 5px fade-out($complementaryColor, 0.4);
}
</style>
