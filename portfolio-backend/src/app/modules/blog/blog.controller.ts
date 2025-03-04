/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { BlogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;

    // will call service func to send this data
    const result = await BlogServices.createBlogIntoDB(blog);

    // send response
    res.status(200).json({
      success: true,
      message: 'Blog is created successful',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};
const updateBlog = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { id } = req.params;

    // will call service func to send this data
    const result = await BlogServices.updateBlogIntoDB(data, id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Blog is update successful',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};
const getAllBlog = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await BlogServices.getAllBlogFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Blog get successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getBlog = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await BlogServices.getBlogFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Blog get successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// student delete

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // will call service func to send this data
    const result = await BlogServices.deleteBlogFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Blog deleted successful',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const blogController = {
  createBlog,
  getAllBlog,
  getBlog,
  deleteBlog,
  updateBlog,
};
