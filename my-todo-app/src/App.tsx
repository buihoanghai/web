import TodoApp from "./components/TodoApp.tsx";
import UseEffectPageViewTracker from "./components/UseEffectPageViewTracker.tsx";
import UseRefCount from "./components/UseRefCount.tsx";
import UseRefBouncingBall from "./components/UseRefBouncingBall.tsx";
import UseRefVirtualizedList from "./components/UseRefVirtualizedList.tsx";
import UseContextThemeToggle from "./components/UseContextThemeToggle.tsx";
import {AuthProvider} from "./contexts/AuthProvider";
import {UseContextAuthButtons} from "./components/UseContextAuthButtons.tsx";
import UserReducerCounter from "./components/UseReducerCounter.tsx";
import UseReducerTodoApp from "./components/UseReducerTodoApp.tsx";
import PrimeCalculator from "./components/PrimeCalculator.tsx";
import UseMemoPrimeCalculator from "./components/UseMemoPrimeCalculator.tsx";
import UseEffectPrimeCalculator from "./components/UseEffectPrimeCalculator.tsx";
import UseCallbackWithoutCounter from "./components/UseCallbackWithoutCounter.tsx";
import UseCallbackCounter from "./components/UseCallbackCounter.tsx";
import UseCallbackList from "./components/UseCallbackList.tsx";
import UseCallbackWithoutList from "./components/UseCallbackWithoutList.tsx";
import UseImperativeHandleCustomInput from "./components/UseImperativeHandleCustomInput.tsx";
import UseLayoutEffectBox from "./components/UseLayoutEffectBox.tsx";
import UseLayoutEffectDarkMode from "./components/UseLayoutEffectDarkMode.tsx";
import UseDebugValue from "./components/UseDebugValue.tsx";
import {UseDeferredValueWithout, SearchApp} from "./components/UseDeferredValueWithout.tsx";
import {FilterApp, UseTransitionFilterApp} from "./components/UseTransition.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./components/Sidebar.tsx";
import {ThemeProvider} from "./contexts/ThemeProvider";
import MessageStackDisplay from "./components/MessageStackDisplay";

function App() {
	return <div>
		<Router>
			<Provider store={store}>
				<ThemeProvider>
					<div className="flex">
						<Sidebar/>
						<div className="flex-1 p-4">
							<AppRoutes/>
							<MessageStackDisplay/>
						</div>
					</div>
				</ThemeProvider>
			</Provider>
		</Router>
		{/*<AuthProvider>*/}
		{/*    <UseTransitionFilterApp/>*/}
		{/*    <FilterApp/>*/}
		{/*    <UseCallbackWithoutCounter/>*/}
		{/*    <UseCallbackCounter/>*/}
		{/*    <UseCallbackList/>*/}
		{/*    <UseCallbackWithoutList/>*/}
		{/*    <ThemeProvider>*/}
		{/*        <UseContextAuthButtons/>*/}
		{/*        <UseContextThemeToggle/>*/}
		{/*        <UseRefVirtualizedList/>*/}
		{/*        <UseRefBouncingBall/>*/}
		{/*        <UseEffectPageViewTracker/>*/}
		{/*        <UseRefCount/>*/}
		{/*        <UserReducerCounter/>*/}
		{/*        <UseReducerTodoApp/>*/}
		{/*    </ThemeProvider>*/}
		{/*    <TodoApp/>*/}
		{/*    <PrimeCalculator/>*/}
		{/*    <UseMemoPrimeCalculator/>*/}
		{/*    <UseEffectPrimeCalculator/>*/}
		{/*    <UseImperativeHandleCustomInput/>*/}
		{/*    <UseLayoutEffectBox/>*/}
		{/*    <UseLayoutEffectDarkMode/>*/}
		{/*    <UseDebugValue/>*/}
		{/*    <div className="flex-row">*/}
		{/*        <SearchApp/>*/}
		{/*        <UseDeferredValueWithout/>*/}
		{/*    </div>*/}
		{/*</AuthProvider>*/}

	</div>
		;
}

export default App;
