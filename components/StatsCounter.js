'use client'

import { useState, useEffect } from 'react'
import CountUp from 'react-countup'

export default function StatsCounter() {
  // Set the launch date (1 month from now for this example)
  const launchDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  
  // Initialize the timeLeft state based on the current date and the launch date
  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date()
    if (difference <= 0) return null
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Limited-Time Offer
          </h1>
          {/* <p className="text-lg text-gray-300">
            Our new platform is launching soon. Stay tuned!
          </p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
              <div className="p-6 text-center">
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  <CountUp
                    end={unit.value}
                    duration={0.5}
                    separator=","
                    useEasing={false}
                    preserveValue={true}
                  />
                </div>
                <div className="text-sm md:text-base font-medium text-gray-400">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Till Date: {launchDate.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}