const Cagetories = () => {
  const categoires = [
    {
      title: "Comics Books",
      img: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Arts & Photography Book",
      img: "https://images.unsplash.com/photo-1624903943615-852738a5163f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0cyUyMGJvb2tzfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      title: "Business & Money Books",
      img: "https://media.istockphoto.com/id/929937564/photo/hes-a-well-read-entrepreneur.webp?a=1&b=1&s=612x612&w=0&k=20&c=0OBbQ8Q2f8UGBhaLrhd1ytkL4BVFI7uCBPoDK2i0D8c=",
    },
  ];

  return (
    <>
      <section className="py-10 px-4  bg-gray-100">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {categoires.map((cat, i) => (
            <div
              key={i}
              className="relative bg-white shadow rounded overflow-hidden "
            >
              <img
                src={cat.img}
                className="w-full h-[200px] object-cover"
                alt={cat.title}
              />
              <div className="p-4 font-sm-bold text-center">{cat.title}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Cagetories;
