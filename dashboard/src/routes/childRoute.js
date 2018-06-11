import Dashboard from '../contents/Dashboard';
import StudentList from '../contents/StudentList';
import PersonList from '../contents/PersonList';

const childRoute = [
	{
		path: "/dashboard",
		name: "Dashboard",
		icon: "pe-7s-display1",
		component: Dashboard
	},
	{
		path: "/student",
		name: "Student List",
		icon: "pe-7s-study",
		component: StudentList
	},
	{
		path: "/person",
		name: "Person List",
		icon: "pe-7s-users",
		component: PersonList
	},
	{ redirect: true,
		path: "/",
		to: "/dashboard",
		name: "Dashboard"
	}
];

export default childRoute;
