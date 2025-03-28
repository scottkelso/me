export function Contact() {
    const email = "joshkelsowork@gmail.com"
    return <h2><a href={"mailto:" + email}>{email}</a></h2>;
}