/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { MessageServices } from './contact.service';

const createMessage = async (req: Request, res: Response) => {
  try {
    const contactInfo = req.body;

    // will call service func to send this data
    const result = await MessageServices.sendMessage(contactInfo);

    // send response
    res.status(201).json({
      success: true,
      message: 'Send Message successful',
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

const getAllMessages = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await MessageServices.getAllMessageFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Messages get successfully',
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

export const messageController = {
  createMessage,
  getAllMessages,
};
