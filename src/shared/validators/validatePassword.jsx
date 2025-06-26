export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z]).{6,}$/;

    return regex.test(password);
}

export const validatePasswordMessage = 'Invalid password format. Password must be at least 6 characters long and contain at least one uppercase letter.';