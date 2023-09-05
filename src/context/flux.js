const getState = ({ getStore, getActions, setStore }) => {
	const store = {
		demo: [
			{
				title: "FIRST",
				background: "",
			},
			{
				title: "SECOND",
				background: "",
			}
		]
    }

	const actions = {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		},
    }

	// Returns context
    return {store, actions}
};

export default getState;
