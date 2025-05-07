import Image from "next/image";

export default function Unsplash() {
  return (
    <>
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 unsplash">
            <Image
            alt="Image 1"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1742943679521-f4736500a471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            />
            <Image
            alt="Image 2"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1742925602178-0f5939ee6845?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
            />
            <Image
            alt="Image 3"
            width={300}
            height={500}
            src="https://plus.unsplash.com/premium_photo-1742202420319-e933c71d4495?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            />
            <Image
            alt="Image 4"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1743031031851-bffbe65f338f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
            />
            <Image
            alt="Image 5"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1743010768826-cc10a67e3b3a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Image
            alt="Image 6"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1741812191037-96bb5f12010a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
            />
            <Image
            alt="Image 7"
            width={300}
            height={500}
            src="https://images.unsplash.com/photo-1742576948659-3c630862a38d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
            />
        </div>
        <div className="flex h-screen items-center justify-center flex-col gap-4">
            <span className="w-24 h-24 bg-gradient-to-tr from-[#096cde] via-[#096cde] via-30% to-[#ddf1ff] rounded-full"/>
            <span className="bg-clip-text px-1 text-9xl leading-[1.1] font-bold text-transparent bg-gradient-to-r from-[#15c064] to-[#00d1ff]">Codify</span>
        </div>
    </>
  );
}
