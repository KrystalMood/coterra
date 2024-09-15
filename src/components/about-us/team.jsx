const TeamMember = ({ imageSrc, name, description }) => (
    <figure className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
      <img src={imageSrc} alt={name} className="w-48 h-48 object-cover rounded-full" />
      <article className="flex-1 mt-7">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-gray-300">{description}</p>
      </article>
    </figure>
  );
  
  export const OurTeam = () => {
    const teamMembers = [
      {
        imageSrc: "../public/template.png",
        name: "Farrel",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate temporibus voluptatum minus odio cumque quaerat quod deleniti recusandae, libero qui, est aliquam! Dolorem explicabo quos quisquam corporis id sequi."
      },
      {
        imageSrc: "../public/template.png",
        name: "Pramudya",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate temporibus voluptatum minus odio cumque quaerat quod deleniti recusandae, libero qui, est aliquam! Dolorem explicabo quos quisquam corporis id sequi."
      },
      {
        imageSrc: "../public/template.png",
        name: "Rafi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cupiditate temporibus voluptatum minus odio cumque quaerat quod deleniti recusandae, libero qui, est aliquam! Dolorem explicabo quos quisquam corporis id sequi."
      }
    ];
  
    return (
      <main className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-4xl mt-4 font-bold mb-12 text-center">Our Team</h1>
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </main>
    );
  };