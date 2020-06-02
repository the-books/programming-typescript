function log(message: string, userId?: string) {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userId || 'Not signed in');
}

log('Page loaded'); // 13:00:59 Page loaded Not signed in

log('User signed in', 'da763be'); // 13:00:59 User signed in da763be


function log2(message: string, userId = 'Not signed in') {
  const time = new Date().toLocaleTimeString();
  console.log(time, message, userId);
}

log2('User clicked on a button', 'da763be'); // 13:04:46 User clicked on a button Not signed in

log2('User signed out'); // 13:04:46 User signed out Not signed in


type Context = {
  appId?: string,
  userId?: string,
};

function log3(message: string, context: Context = {}) {
  const time = new Date().toISOString();
  console.log(time, message, context.userId);
}

log3('User clicked on a button', { userId: 'da763be' });

log3('User signed out');

export {};
