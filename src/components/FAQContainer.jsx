import FAQ from "./FAQ";

const FAQContainer = () => {
  return (
    <div className="container px-6 mt-14 mx-auto">
      <div className="max-w-2xl mx-auto">
        <FAQ
          question="What is Bookmark?"
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex possimus cum dolor aliquam ea laboriosam esse molestias laborum error deleniti!"
        />
        <FAQ
          question="How can I request a new browser?"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis iure facere eum sapiente eligendi ut omnis saepe libero, dolor ipsa cupiditate mollitia dolore tempore? Sapiente nostrum dolore obcaecati ipsa."
        />
        <FAQ
          question="Is ther a mobile app?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum recusandae reprehenderit. Unde nihil id quidem adipisci tenetur repellat tempore ratione sint! Porro ut minima culpa dolore repudiandae eos quidem doloribus!"
        />
        <FAQ
          question="What about other Chromium browsers"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium, maiores ex a explicabo quasi veniam, iusto nostrum minima dolor aliquam saepe eaque odit suscipit, quas optio labore animi debitis tempora? Tempore."
        />
      </div>

      <p></p>
    </div>
  );
};

export default FAQContainer;
