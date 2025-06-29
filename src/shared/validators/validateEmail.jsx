export const validateEmail = (email) => {
    if (!email) return false;
    
    if (typeof email !== 'string') return false;
    
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
};

