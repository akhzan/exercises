import Vue from 'vue'
import Weather from '@/components/Weather'

describe('Weather.vue', () => {
  const Constructor = Vue.extend(Weather)
  const vm = new Constructor().$mount()
  it('should render jakarta at first value of dropdown', () => {
    expect(vm.$el.querySelector('.city option:checked').textContent.trim().replace(`/n`,''))
    .to.equal('Jakarta')
  })
  it('should render 3 value at dropdown', () => {
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('option').length).to.equal(3)
    },1000)
  })
  it('should render jakarta at first header of grid', () => {
    setTimeout(() => {
      expect(vm.$el.querySelector('tr th').textContent).to.equal('Jakarta')
    },1000)
  })
  it('should render 3 rows at grid header', () => {
    setTimeout(() => {
      expect(vm.$el.querySelectorAll('th').length)
      .to.equal(3)
    },1000)
  })
  it('gridData should have length = 5', () => {
    setTimeout(() => {
      expect(vm.gridData.length).to.equal(5)
    },1000)
  })
  // it('gridData key date should have type of date', () => {
  //   setTimeout(() => {
  //     const date_regex = /^(19|20)\d{2}$-(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])/ ;
  //     // console.log(vm.gridData)
  //     expect(vm.gridData).to.equal('xxx')
  //   },1000)
  // })
})
