import Vue from 'vue'
import Weather from '@/components/Weather'

describe('Weather.vue', () => {
  it('should render jakarta at first value of dropdown', () => {
    const Constructor = Vue.extend(Weather)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.city option:checked').textContent.trim().replace(`/n`,''))
    .to.equal('Jakarta')
  })
  it('should render jakarta at first header of grid', () => {
    const Constructor = Vue.extend(Weather)
    const vm = new Constructor().$mount()
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('th').textContent).toBe('Jakarta')
      done()
    })
  })
  // it('should render correct contents', done => {
  //   const Constructor = Vue.extend(Weather)
  //   const vm = new Constructor().$mount()
  //   Vue.nextTick(() => {
  //     expect(vm.gridData.length).toBe(5)
  //     done()
  //   })
  // })
})
