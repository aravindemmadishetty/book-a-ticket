var movieData = [
  {
	"name":"Captain America: The First Avenger",
	"starring": "Chris Evans, Tommy Lee Jones, Hugo Weaving, Hayley Atwell",
	"director": "Joe Johnston",
	"mid":"M01",
  },
  {
	"name":"Captain Marvel",
	"starring": "Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Djimon Hounsou",
	"director": "Anna Boden, Ryan Fleck",
	"mid":"M02",
  },
  {
	"name":"Iron Man",
	"starring": "Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",
	"director": "Jon Favreau",
	"mid":"M03",
  },
  {
	"name":"Iron Man 2",
	"starring": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Mickey Rourke",
	"director": "Jon Favreau",
	"mid":"M04",
  },
  {
	"name":"The Incredible Hulk",
	"starring": "Edward Norton, Liv Tyler, Tim Roth, William Hurt",
	"director": "Louis Leterrier",
	"mid":"M05",
  },
  {
	"name":"Thor",
	"starring": "Chris Hemsworth, Natalie Portman, Anthony Hopkins, Tom Hiddleston",
	"director": "Kenneth Branagh",
	"mid":"M06",
  },
  {
	"name":"Marvel's The Avengers",
	"starring": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgard Samuel L. Jackson",
	"director": "Joss Whedon",
	"mid":"M07",
  },
  {
	"name":"Iron Man 3",
	"starring": "Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce",
	"director": "Shane Black",
	"mid":"M08",
  },
  {
	"name":"Thor: The Dark World",
	"starring": "Chris Hemsworth, Natalie Portman, Tom Hiddleston, Stellan Skarsgard",
	"director": "Alan Taylor",
	"mid":"M09",
  },
  {
	"name":"Avengers: Endgame",
	"starring": "Robert Downey Jr., Mark Ruffalo, Scarlett Johansson, Chris Evans",
	"director": "Anthony Russo",
	"mid":"M10",
  },
  {
	"name":"Captain America: The Winter Soldier",
	"starring": "Chris Evans, Samuel L. Jackson, Scarlett Johansson, Anthony Mackie",
	"director": "Joe Russo, Anthony Russo",
	"mid":"M11",
  },
  {
	"name":"Guardians Of The Galaxy",
	"starring": "Chris Pratt, Zoe Saldana, Dave Bautista, Lee Pace",
	"director": "James Gunn (II)",
	"mid":"M12",
  },
  {
	"name":"Guardians Of The Galaxy 2",
	"starring": "Chris Pratt, Zoe Saldana, Dave Bautista, Bradley Cooper",
	"director": "James Gunn (II)",
	"mid":"M13",
  },
  {
	"name":"Avengers: Age Of Ultron",
	"starring": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
	"director": "Joss Whedon",
	"mid":"M14",
  },
  {
	"name":"Ant-Man",
	"starring": "Paul Rudd, Michael Douglas, Evangeline Lilly, Corey Stoll",
	"director": "Peyton Reed",
	"mid":"M15",
  },
  {
	"name":"Captain America: Civil War",
	"starring": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan",
	"director": "Anthony Russo",
	"mid":"M16",
  },
  {
	"name":"Spider Man: Homecoming",
	"starring": "Tom Holland (II), Michael Keaton, Robert Downey Jr., Gwyneth Paltrow",
	"director": "Jon Watts",
	"mid":"M17",
  },
  {
	"name":"Doctor Strange",
	"starring": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
	"director": "Scott Derrickson, Patrick Archibald, Jay Oliva, Frank Paur",
	"mid":"M18",
  },
  {
	"name":"Black Panther",
	"starring": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
	"director": "Ryan Coogler",
	"mid":"M19",
  },
  {
	"name":"Thor: Ragnarok",
	"starring": "Chris Hemsworth, Tom Hiddleston, Mark Ruffalo, Cate Blanchett",
	"director": "Taika Waititi",
	"mid":"M20",
  },
  {
	"name":"Avengers: Infinity War",
	"starring": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
	"director": "Anthony Russo",
	"mid":"M21",
  },
  {
	"name":"Ant-Man And The Wasp",
	"starring": "Paul Rudd, Evangeline Lilly, Michael Peña, Walton Goggins",
	"director": "Peyton Reed",
	"mid":"M22",
  },
  {
	"name":"Spider-Man: Far From Home",
	"starring": "Tom Holland (II), Samuel L. Jackson, Zendaya, Cobie Smulders",
	"director": "Jon Watts",
	"mid":"M23",
  },
]

var theatreData = [
  {
	"name":"PVR Cinemas",
	"tid":"T01",
	"seatCount":[100, 10, 10],
  },
  {
	"name":"Carnival Cinemas",
	"tid":"T02",
	"seatCount":[180, 15, 12],
  },
  {
	"name":"BR Hitech Theatre",
	"tid":"T03",
	"seatCount":[80, 8, 10],
  },
  {
	"name":"Shiva Parvathi Theatre",
	"tid":"T04",
	"seatCount":[144, 12, 12],
  },
  {
	"name":"SVC Sangeeta Theatre",
	"tid":"T05",
	"seatCount":[196, 14, 14],
  },
  {
	"name":"Prashanth Theatre",
	"tid":"T06",
	"seatCount":[180, 15, 12],
  },
  {
	"name":"PVR RK Cineplex",
	"tid":"T07",
	"seatCount":[100, 10, 10],
  },
  {
	"name":"Vishwanath Theatre",
	"tid":"T08",
	"seatCount":[140, 14, 10],
  },
  {
	"name":"Platinum Movie Time",
	"tid":"T09",
	"seatCount":[180, 15, 12],
  },
  {
	"name":"Asian Jyothi Cinema",
	"tid":"T10",
	"seatCount":[140, 14, 10],
  },
  {
	"name":"Miraj Cinemas",
	"tid":"T11",
	"seatCount":[150, 15, 10],
  },
  {
	"name":"Asian Muktha",
	"tid":"T12",
	"seatCount":[192, 16, 12],
  },
  {
	"name":"Vijetha Theatre",
	"tid":"T13",
	"seatCount":[168, 14, 12],
  },
  {
	"name":"INOX cinemas",
	"tid":"T14",
	"seatCount":[180, 15, 12],
  },
  {
	"name":"BVK Multiplex",
	"tid":"T15",
	"seatCount":[100, 10, 10],
  },
  {
	"name":"Asian GPR Multiplex",
	"tid":"T16",
	"seatCount":[80, 10, 8],
  },
  {
	"name":"Santhosh Cinemas",
	"tid":"T17",
	"seatCount":[120, 12, 10],
  },
  {
	"name":"Ram Laxman Theatre",
	"tid":"T18",
	"seatCount":[180, 15, 12],
  },
  {
	"name":"Asian Sridevi Mall",
	"tid":"T19",
	"seatCount":[140, 14, 10],
  },
  {
	"name":"Bhavani Theatre",
	"tid":"T20",
	"seatCount":[196, 14, 14],
  },
]

var cityData = [
  {
	"name":"Miyapur",
	"theatres":[
	  {
		"tid":"T01",
		"movies":["M01", "M01", "M01", "M02"],
	  },
	  {
		"tid":"T02",
		"movies":["M02","M02","M02","M03"],
	  },
	  {
		"tid": "T03",
		"movies":["M03", "M03","M04","M04"],
	  },
	  {
		"tid": "T04",
		"movies":["M05","M05","M05","M05"],
	  },
	],
  },
  {
	"name":"Kukatpally",
	"theatres":[
	  {
		"tid": "T05",
		"movies":["M06","M06","M06","M06"],
	  },
	  {
		"tid": "T06",
		"movies":["M07","M07","M08","M07"],
	  },
	  {
		"tid": "T07",
		"movies":["M09","M08","M09","M09"],
	  },
	  {
		"tid": "T08",
		"movies":["M10","M10","M10","M08"],
	  },
	],
  },
  {
	"name":"Madhapur",
	"theatres":[
	  {
		"tid": "T09",
		"movies":["M11","M11","M11","M11"],
	  },
	  {
		"tid": "T10",
		"movies":["M12","M12","M12","M12"],
	  },
	  {
		"tid": "T11",
		"movies":["M13","M13","M13","M13"],
	  },
	  {
		"tid": "T12",
		"movies":["M14","M14","M14","M14"],
	  },
	],
  },
  {
	"name":"Manikonda",
	"theatres":[
	  {
		"tid": "T13",
		"movies":["M15","M15","M15","M16"],
	  },
	  {
		"tid": "T14",
		"movies":["M16","M16","M16","M15"],
	  },
	  {
		"tid": "T15",
		"movies":["M17","M17","M17","M17"],
	  },
	  {
		"tid": "T16",
		"movies":["M18","M18","M18","M18"],
	  },
	],
  },
  {
	"name":"Gachibowli",
	"theatres":[
	  {
		"tid": "T17",
		"movies":["M19","M19","M20","M20"],
	  },
	  {
		"tid": "T18",
		"movies":["M21","M21","M21","M21"],
	  },
	  {
		"tid": "T19",
		"movies":["M22","M23","M22","M23"],
	  },
	  {
		"tid": "T20",
		"movies":["M23","M22","M23","M22"],
	  },
	],
  },

]

var times = ["11:00 AM", "02:30 PM", "06:00 PM", "09:30 PM"];
