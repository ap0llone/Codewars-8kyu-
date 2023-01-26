const problem = x => {
  let solution = (x*50)+6;
  if(typeof x == 'string'){
    return 'Error';
  }
  return solution;
}