import PicProfile from "/src/assets/profile.png";
const ProfileFront = () => {
  return (
    <figure className="flex flex-row flex-1 justify-around m-16 bg-emerald-500 h-fit p-8 rounded-4xl">
        <figcaption className="flex flex-col size-56 rounded-4xl">
          <img src={PicProfile} className="rounded-4xl" alt="" />
          
        {/* </figcaption> */}
        {/* ____________________________________________ */}
        {/* <figcaption className="size-116 rounded-4xl bg-emerald-100"> */}
        
        <ul className="flex flex-col justify-center">
          <li>Pseudo :</li>
          <li>Prenom :</li>
          <li>Nom :</li>
          <li>Email :</li>
        </ul>

        {/* </figcaption> */}
        {/* ____________________________________________ */}
        {/* <figcaption className="flex flex-col size-56 bg-white h-116 rounded-4xl"> */}

        </figcaption>
    </figure>
  )
}

export default ProfileFront