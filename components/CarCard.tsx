'use client'

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";

import { useState } from "react";
import Image from "next/image";

interface CarCardProps {
  car: CarProps
}

export default function CarCard({ car }: CarCardProps) {

  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  )
}
