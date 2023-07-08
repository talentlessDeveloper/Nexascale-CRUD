const people = [
  {
    imgUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Arthur',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Mike',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1522512115668-c09775d6f424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Feyi',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Fatimah',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Mariam',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Makelele',
  },
  {
    imgUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Idan Sabinus',
  },
];

export const randomPeople = () => {
  const randomNum = Math.floor(Math.random() * people.length);
  return people[randomNum];
};
