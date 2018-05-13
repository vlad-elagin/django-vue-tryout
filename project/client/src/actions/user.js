export const signUp = async (context, data) => {
  console.log('signing up', data);
  let res;
  try {
    res = await fetch('/api/user/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new FormData(data)
    });
    if (res.status !== 201) {
      console.log(res.text());
      throw new Error(res.json());
    }
    console.log('seems success', res);
  } catch (err) {
    console.log('error', err);
  }

};
