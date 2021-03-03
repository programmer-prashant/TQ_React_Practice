import './App.css';
import Hero from './components/errorBoundries/Hero';
import ErrorBoundry from './components/errorBoundries/ErrorBoundry';
import PortalDemo from './components/portals/PortalDemo';
import FRParentInput from './components/refs/FRParentInput';
import ClickCounter from './components/hoc/ClickCounter';
import HoverCounter from './components/hoc/HoverCounter';

// import ParentPureComp from './components/pureComponents/ParentPureComp';
// import FocusInput from './components/refs/FocusInput';
// import RefsDemo from './components/refs/RefsDemo';
// import ClassComp from './components/basics/ClassComp';
// import CreateElementDemo from './components/basics/CreateElementDemo';
// import FunctionalComp from './components/basics/FunctionalComp';
// import ApprovalCard from './components/props/ApprovalCard';
// import CommentDetail from './components/props/CommentDetail';
// import StateDemo from './components/states/StateDemo';
// import StateDemoConstructor from './components/states/StateDemoConstructor';
// import data from './components/props/data';
// import DynamicTable from './components/props/DynamicTable';
// import Detructuring from './components/props/Detructuring';
// import DestructuringClass from './components/states/DestructuringClass';
// import ClassCompEvent from './components/events/ClassCompEvent';
// import FunctionalCompEvent from './components/events/FunctionalCompEvent';
// import BindingDemo from './components/events/BindingDemo';
// import RenderingDemo from './components/conditional_rendering/RenderingDemo';
// import RenderingFunc from './components/conditional_rendering/RenderingFunc';
// import Element_Variable from './components/conditional_rendering/Element_Variable';
// import Ternary_Operator from './components/conditional_rendering/Ternary_Operator';
// import ShortCircuit from './components/conditional_rendering/ShortCircuit';
// import ParentComp from './components/conditional_rendering/ParentComp';
// import MapDemo from './components/list_rendering/MapDemo';
// import MapDemoTwo from './components/list_rendering/MapDemoTwo';
// import Employee from './components/list_rendering/Employee';
// import EmployeeList from './components/list_rendering/EmployeeList';
// import StyleDemo from './components/stylesDemo/StyleDemo';
// import InlineDemo from './components/stylesDemo/InlineDemo';
// import FormDemo from './components/forms/FormDemo';
// import Uncontrolled from './components/forms/Uncontrolled';
// import UserForm from './components/forms/multy_stepForm/UserForm';
// import ParentDemo from './components/basics/ParentDemo';
// import FragDemo from './components/fragmentsDemo/FragDemo';
// import TableDemo1 from './components/fragmentsDemo/TableDemo1';
// import PureComp from './components/pureComponents/PureComp';

function App() {
	return (
		<div className='App'>
			{/* <div className='App'>
			<ClassComp />
			<FunctionalComp />
			<CreateElementDemo />
			<StateDemo />
			<StateDemoConstructor hobby='Football' />
			<Detructuring name='Prashant' roll='101' />
			<DestructuringClass hero='Iron Man' ability='fly' />
			<RenderingFunc />
			<RenderingDemo />
			<Element_Variable />
			<BindingDemo />
			<Ternary_Operator />
			<ShortCircuit />
			<MapDemoTwo />
			<ClassCompEvent />
			<ParentComp />
			<FunctionalCompEvent />
			<MapDemo />
				{data.map((item) => {
					return (
						<CommentDetail
							id={item.id}
							author={item.author}
							timeAgo={item.timeAgo}
							content={item.content}
						/>
					);
				})}
			</div>
			<DynamicTable tdata={data} />
			<EmployeeList />
			<StyleDemo />
			<InlineDemo />
			<FormDemo />
			<Uncontrolled />
			<UserForm />
			<ParentDemo />
			<FragDemo />
			<TableDemo1 />
			<PureComp />
			<ParentPureComp />
			<RefsDemo />
			<FocusInput />
			<PortalDemo />
			<ErrorBoundry>
				<Hero heroName='Batman' />
			</ErrorBoundry>
			<ErrorBoundry>
				<Hero heroName='Superman' />
			</ErrorBoundry>
			<ErrorBoundry>
				<Hero heroName='joker' />
			</ErrorBoundry>
			<FRParentInput />
			 */}
			<ClickCounter />
			<HoverCounter />
		</div>
	);
}

export default App;
