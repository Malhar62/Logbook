
export default function Time() {
    var TIME = new Date().getHours();
    if (TIME >= 5 && TIME < 12) {
        return 'Good Morning'
    } else {
        if (TIME >= 12 && TIME < 17) {
            return 'Good Afternoon'
        } else {
            if (TIME >= 17 && TIME < 24) {
                return 'Good Evening'
            } else {
                return 'Good Night'
            }
        }
    }
}