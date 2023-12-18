import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import BeritaList from '@/Components/Homepage/BeritaList';
import Pagination from '@/Components/Homepage/Pagination';

export default function Homepage(props) {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Head title={props.title} />
      <Navbar user={props.auth.user} />
      <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4 mt-4'>
        <BeritaList news={props.news.data} />
      </div>
      <div className='flex justify-center items-center'>
        <Pagination meta={props.news.meta} />
      </div>
    </div>
  )
}