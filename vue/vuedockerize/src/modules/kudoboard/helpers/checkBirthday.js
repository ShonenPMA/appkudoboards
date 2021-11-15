
const checkBirthday = (birthdate) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    today.setFullYear(0);
    const compare = new Date(birthdate +" 00:00:00")
    compare.setFullYear(0)

    return today.valueOf() == compare.valueOf()
}

export default checkBirthday