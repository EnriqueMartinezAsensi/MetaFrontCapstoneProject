import { FormType } from "../types/FormType";
import { fetchAPI, submitAPI } from "./api";

export const getHours = (date: Date) => {
  return fetchAPI(date);
};

export const sendReservation = (data: FormType) => {
  const { date, guest, hour, name, phone, email, zone, specialneeds } = data;
  return submitAPI({
    date,
    guest,
    name,
    phone: phone || "",
    email,
    hour,
    zone: zone || "",
    specialneeds
  });
};