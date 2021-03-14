import './App.css';
import React from 'react';

//********************************************* React Hooks *****************************************************/
import FetchData from './hooks/useEffect/FetchData';
import UseEffectDemoOne from './hooks/useEffect/UseEffectDemoOne';
import UseEffectDemoThree from './hooks/useEffect/UseEffectDemoThree';
import UseEffectDemoTwo from './hooks/useEffect/UseEffectDemoTwo';
import UseStateDemo from './hooks/useState/UseStateDemo';
import HookCounter from './hooks/useState/HookCounter';
import UseStateDemoTwo from './hooks/useState/UseStateDemoTwo';
import UseStateDemoThree from './hooks/useState/UseStateDemoThree';
import ConditionalDemo from './hooks/useState/ConditionalDemo';
import UseRDemo from './hooks/useReducer/UseRDemo';
import CustomDemo from './hooks/customHook/CustomDemo';
import UseReducerDemoTwo from './hooks/useReducer/UseReducerDemoTwo';
import BasicForm from './hooks/useRef/BasicForm';
import Main from './hooks/useLocation/Main';

//********************************************* React Core Concepts *****************************************************/
// import CrudExample from './components/curd/CURD';
// import SingleInputDemo from './components/forms/SingleInputDemo';
// import ComponentP from './hooks/useContext/ComponentP';
// export const sendContext = React.createContext();
// import { UserProvider } from './hooks/useContext/UseContext';
// import Hero from './components/errorBoundries/Hero';
// import ErrorBoundry from './components/errorBoundries/ErrorBoundry';
// import PortalDemo from './components/portals/PortalDemo';
// import FRParentInput from './components/refs/FRParentInput';
// import ClickCounter from './components/hoc/ClickCounter';
// import HoverCounter from './components/hoc/HoverCounter';
// import ClickCounterTwo from './components/render_props/ClickCounterTwo';
// import HoverCounterTwo from './components/render_props/HoverCounterTwo';
// import User from './components/render_props/User';
// import CounterLogic from './components/render_props/CounterLogic';
// import ComponentA from './components/context/ComponentA';
// import GETRequest from './components/http/GETRequest';
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
			{/* 
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
			<ClickCounter />
			<HoverCounter />
			<ClickCounterTwo />
			<HoverCounterTwo />
			<User render={(isLoggedIn) => (isLoggedIn ? 'Prashant' : 'Guest')} />
			<CounterLogic
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<CounterLogic
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<GETRequest />
			<CrudExample />
			<SingleInputDemo />
			<UserProvider value='Prashant'>
				<ComponentA />
			</UserProvider>
			 */}

			{/* +********************************* React Hooks **********************************************
			
			
			<UseEffectDemoOne />
			<UseEffectDemoTwo />
			<UseEffectDemoThree />
			<FetchData />
				<sendContext.Provider value={'Prashant'}>
				<ComponentP />
			</sendContext.Provider>
			<UseStateDemo />
			<HookCounter />
			<UseStateDemoTwo />
			<UseStateDemoThree />
			<FetchData />
			<UseRDemo />
			<CustomDemo />
			<UseReducerDemoTwo />
			<ConditionalDemo />
			<BasicForm />
			 */}
			<Main />
		</div>
	);
}

export default App;
