if(Courses.find().count() === 0){
	Courses.insert({
		name: 'Programming One',
		type: 'Generic',
		number: '1903',
		professor: 'Ron McFayden',
		cost: 500,
		order: 1
	});

	Courses.insert({
		name: 'Programming Two',
		type: 'Generic',
		number: '1904',
		professor: 'Ron McFayden',
		cost: 500,
		order: 2
	});

	Courses.insert({
		name: 'Internet Programming',
		type: 'Generic',
		number: '2909',
		professor: 'Chris Henry',
		cost: 800,
		order: 3
	});

	Courses.insert({
		name: 'Programming One',
		type: 'Generic',
		number: '1903',
		professor: 'Ron McFayden',
		cost: 500,
		order: 4
	});

	Courses.insert({
		name: 'Programming Two',
		type: 'General Motors',
		number: '1904',
		professor: 'Ron McFayden',
		cost: 500,
		order: 1
	});

	Courses.insert({
		name: 'Internet Programming',
		type: 'Ford',
		number: '2909',
		professor: 'Chris Henry',
		cost: 800,
		order: 1
	});

	Courses.insert({
		name: 'Programming One',
		type: 'Honda',
		number: '1903',
		professor: 'Ron McFayden',
		cost: 500,
		order: 1
	});

	Courses.insert({
		name: 'Programming Two',
		type: 'Chrysler',
		number: '1904',
		professor: 'Ron McFayden',
		cost: 500,
		order: 1
	});

	Courses.insert({
		name: 'Internet Programming',
		type: 'Volkswagen',
		number: '2909',
		professor: 'Chris Henry',
		cost: 800,
		order: 1
	});
}

// if(Admin.find().count() === 0){
// 	Admin.insert({
// 		userID : 'quuXjf4vCvAb2GEa2'
// 	});
// }

if(CourseTypes.find().count() === 0){
	CourseTypes.insert({
		name: "Generic",
		showNav: true,
		order: 1
	});

	CourseTypes.insert({
		name: "General Motors",
		showNav: true,
		order: 2
	});

	CourseTypes.insert({
		name: "Ford ",
		showNav: true,
		order: 3
	});

	CourseTypes.insert({
		name: "Chrysler",
		showNav: true,
		order: 4
	});

	CourseTypes.insert({
		name: "Toyota",
		showNav: true,
		order: 5
	});

	CourseTypes.insert({
		name: "Honda",
		showNav: true,
		order: 6
	});

	CourseTypes.insert({
		name: "Nissan",
		showNav: true,
		order: 7
	});

	CourseTypes.insert({
		name: "Mazda",
		showNav: true,
		order: 8
	});

	CourseTypes.insert({
		name: "Volkswagen",
		showNav: true,
		order: 9
	});
}