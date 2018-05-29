let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get','right', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript', 'to', 'Program'];

secretMessage.pop();
secretMessage.unshift('Programming');
secretMessage.splice(4, 1, 'know');
console.log(secretMessage);
console.log(secretMessage.length);
console.log(secretMessage.shift(0));
console.log(secretMessage.join());

/* [ 'Programming',
  'Learning',
  'is',
  'not',
  'know',
  'what',
  'you',
  'get',
  'right',
  'the',
  'first',
  'time,',
  'it',
  'is',
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
  'to' ]
26
Programming
Learning,is,not,know,what,you,get,right,the,first,time,,it,is,about,what,you,can,figure,out.,-2015,,Chris,Pine,,Learn,JavaScript,to
*/