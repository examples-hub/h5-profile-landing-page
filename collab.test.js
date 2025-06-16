import { hello2 } from './collab.js';
import { useState } from 'react';

console.log(';; log ', hello2);

function useCollabMulti() {
  const [member, setMember] = useState({});

  console.log(';; log ', member);

  return member;
}
