const ResumeButton = () => {
  return (
    <div className=" flex justify-center">
      <a
        href="/assets/Resume_NurAbunamus.pdf"
        target="_blank"
        className="sm:w-25 w-40 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md flex items-center justify-center"
      >
        Résumé
      </a>
    </div>
  );
};

export default ResumeButton;
