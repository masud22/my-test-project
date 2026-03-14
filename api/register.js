export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userData = req.body;

    // Log the received data to the Vercel console
    console.log('--- New Professional Registration ---');
    console.log('Username:', userData.username);
    console.log('Company:', userData.companyName);
    console.log('Address:', userData.address);
    console.log('Postal Address:', userData.postalAddress);
    console.log('Phone:', userData.phone);
    console.log('------------------------------------');

    // Here you would typically integrate with a database (e.g., PostgreSQL, MongoDB)
    // For this demonstration, we'll simulate a database write.
    await new Promise(resolve => setTimeout(resolve, 800));

    return res.status(200).json({ 
      success: true,
      message: 'Corporate profile for ' + userData.companyName + ' has been saved.' 
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
