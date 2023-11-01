export const skillSources = [
	'personal projects and self-studying',
	'Performativ',
	'STOP THE TRAFFIK',
];

export const skillsList = [
	{ name: 'JavaScript', source: [1, 2], importance: 1 },
	{ name: 'TypeScript', source: [1], importance: 3 },
	{ name: 'React', source: [1, 2], importance: 1 },
	{ name: 'Node.js', source: [2], importance: 1 },
	{ name: 'Express', source: [2], importance: 3 },
	{ name: 'HTML', source: [1, 2], importance: 3 },
	{ name: 'CSS', source: [1, 2], importance: 3 },
	{ name: 'SASS', source: [2], importance: 9 },
	{ name: 'Tailwind', source: [1], importance: 9 },
	{ name: 'Bootstrap', source: [0], importance: 9 },
	{ name: 'MUI', source: [2], importance: 9 },
	{ name: 'AntDesign', source: [1], importance: 9 },
	{ name: 'MongoDB', source: [2], importance: 1 },
	{ name: 'MySQL', source: [1], importance: 1 },
	{ name: 'PostgreSQL', source: [0], importance: 5 },
	{ name: 'MS SQL', source: [2], importance: 5 },
	{ name: 'PHP', source: [1], importance: 3 },
	{ name: 'Laravel', source: [1], importance: 3 },
	{ name: 'Ruby', source: [0], importance: 3 },
	{ name: 'Ruby on Rails', source: [0], importance: 5 },
	{ name: 'Git', source: [1, 2], importance: 5 },
	{ name: 'Docker', source: [1, 2], importance: 5 },
	{ name: 'AWS', source: [1, 2], importance: 5 },
	{ name: 'Kubernetes', source: [2], importance: 7 },
	{ name: 'Firebase', source: [0], importance: 7 },
];

export const getSkillsSources = (numbers, source) => {
	return numbers.map((number) => source[number]);
};
