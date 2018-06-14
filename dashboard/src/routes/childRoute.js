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
		path: "/tutor",
		name: "Tutor",
		icon: "pe-7s-users",
		component: PersonList
	},
	{
		path: "/student",
		name: "Student",
		icon: "pe-7s-study",
		component: StudentList
	},
	{ redirect: true,
		path: "/",
		to: "/dashboard",
		name: "Dashboard"
	}
];

export default childRoute;
