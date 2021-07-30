loop1:
for (let i = 0; i < 5; i++) {
  loop2:
  for(let j=0;j<5;j++)
  {
    console.log(i,j)
    if(i==j)
    {
      continue loop1
    }
  }
}
