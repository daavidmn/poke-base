import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import ResultItem from '@/components/ResultItem.vue'
import SearchBox from '@/components/SearchBox.vue'

describe('Starting app unit tests', () => {
    test('App.vue is a vue instance', () => {
        const wrapper = shallowMount(App, {
            stubs: ['router-link', 'font-awesome-icon', 'router-view']
        })

        expect(wrapper.vm).toBeTruthy()
    })
})

describe('Testing search box', () => {
    test('Calls searchInput when search button is clicked', () => {
        const wrapper = shallowMount(SearchBox, {
            stubs: ['font-awesome-icon']
            // stubs: ['router-link', 'font-awesome-icon', 'router-view']
        })
        const searchInput = jest.fn()

        wrapper.setMethods({
            searchInput: searchInput
        })

        wrapper.find('button').trigger('click')

        // Assert the rendered text of the component
        //   expect(wrapper.text()).toContain('Hello world')
        expect(searchInput).toHaveBeenCalled()
    })
})
