import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import ReactPaginate from "react-paginate";

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExercises = exercises.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(exercises.length / itemsPerPage);

  return (
    <div className="container mx-auto  my-8 p-4 ">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3  mx-auto  gap-8 ">
          {currentExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              gifUrl={exercise.gifUrl}
              name={exercise.name}
              exerciseId={exercise.id}
            ></ExerciseCard>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-8">
        <ReactPaginate
          className="flex flex-row space-x-4 px-3 py-2 font-bold "
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"text-[#6557fd]"}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
        />
      </div>
    </div>
  );
};

export default Exercises;
