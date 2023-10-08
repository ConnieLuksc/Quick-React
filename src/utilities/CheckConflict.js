
const isOverlapping = (start1, end1, start2, end2) => {
    return (start1 < end2 && start2 < end1);
};

const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
};

const parseMeetingTimes = (meets) => {
    if (meets === "") return { days: "", startTime: 0, endTime: 0 };
    
    const [days, time] = meets.split(" ");
    const [startTime, endTime] = time.split("-").map(timeToMinutes);
    return { days, startTime, endTime };
};

const isConflicting = (class1, class2) => {
    if (class1.term !== class2.term) return false;

    const class1Times = parseMeetingTimes(class1.meets);
    const class2Times = parseMeetingTimes(class2.meets);

    for (let day of class1Times.days) {
        if (class2Times.days.includes(day) && 
            isOverlapping(class1Times.startTime, class1Times.endTime, class2Times.startTime, class2Times.endTime)) {
            return true;
        }
    }
    return false;
};

const getConflictingCourses = (selectedCourse, courseList) => {
    return courseList.filter(course => isConflicting(selectedCourse, course));
};

export { isConflicting, getConflictingCourses };
