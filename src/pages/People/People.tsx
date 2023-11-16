import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api/people';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { Person } from '../../components/Person/Person';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setUsersAC } from '../../redux/usersReducer';
import './People.scss';

export const People = () => {
  const [term, setTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const users = useAppSelector(state => state.users.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);

    getPeople(currentPage, term)
      .then((response) => {
        const maxPage = Math.ceil(response.data.totalCount / 20);

        setTotalPages(maxPage);
        dispatch(setUsersAC(response.data.items));
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [currentPage]);
  
  return (
    <div className="people">
      <div className="search">Search</div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {users.map(user => (
            <Person key={user.id} user={user} />
          ))}
        </>
      )}

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePageHandler={setCurrentPage}
        />
      </div>
    </div>
  );
}
