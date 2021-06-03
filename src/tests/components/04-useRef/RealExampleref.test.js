import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import RealExampleref from "../../../components/04-useRef/RealExampleref";


describe('test in <RealExampleref />', () => {

    test('should render correctly', () => {

        let wrapper = shallow( <RealExampleref /> )
    
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( false )
    })

    test('should render the component <MultipleCustomHooks />', () => {
        let wrapper = shallow( <RealExampleref /> )

        wrapper.find('.btn').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBe( true )
    })
    
    
});
