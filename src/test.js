const data = [
    {name: "Alex", salary: 800, incrrease: false},
    {name: "Stan", salary: 3000, incrrease: true},
    {name: "Michel", salary: 5000, incrrease: false}
  ];


  console.log({...data});


 data.map(item => {
     return (console.log({...item}));
  });


