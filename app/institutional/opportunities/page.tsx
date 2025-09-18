"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { useTranslation } from "@/components/translation-context"
import { Search, Grid3X3, List, MapPin, Calendar, Users, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function opportunitiesPage() {
  const { t } = useTranslation()
  const router = useRouter()

  const [selectedCountry, setSelectedCountry] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedWorkModel, setSelectedWorkModel] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const mockJobs = [
    {
      id: "1",
      title: "Senior Software Engineer",
      country: "Brazil",
      location: "São Paulo, SP",
      workModel: "Hybrid",
      postedDate: "2024-01-15",
      applications: 12,
    },
    {
      id: "2",
      title: "Frontend Developer",
      country: "Portugal",
      location: "Lisbon",
      workModel: "Remote",
      postedDate: "2024-01-10",
      applications: 8,
    },
    {
      id: "3",
      title: "DevOps Engineer",
      country: "United States",
      location: "New York, NY",
      workModel: "In-Person",
      postedDate: "2024-01-12",
      applications: 15,
    },
    {
      id: "4",
      title: "UX Designer",
      country: "Spain",
      location: "Madrid",
      workModel: "Hybrid",
      postedDate: "2024-01-08",
      applications: 6,
    },
  ]

  const filteredJobs = mockJobs
    .filter((job) => selectedCountry === "All" || job.country === selectedCountry)
    .filter((job) => selectedLocation === "All" || job.location.includes(selectedLocation))
    .filter((job) => selectedWorkModel === "All" || job.workModel === selectedWorkModel)
    .sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        case "applications":
          return a.applications - b.applications
        case "workModel":
          return a.workModel.localeCompare(b.workModel)
        default:
          return 0
      }
    })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  const opportunities = [
    {
      id: t("opportunities.softwareEngineer.id"),
      type: t("opportunities.softwareEngineer.type"),
      title: t("opportunities.softwareEngineer.title"),
      summary: t("opportunities.softwareEngineer.summary"),
      description: t("opportunities.softwareEngineer.description"),
      employmentType: t("opportunities.softwareEngineer.employmentType"),
      seniorityLevel: t("opportunities.softwareEngineer.seniorityLevel"),
      workplaceType: t("opportunities.softwareEngineer.workplaceType"),
      companyLogo: "", // Placeholder for company logo
      location: {
        city: t("opportunities.location.softwareEngineer.city"),
        state: t("opportunities.location.softwareEngineer.state"),
        country: t("opportunities.location.softwareEngineer.country"),
        remote: t("opportunities.location.softwareEngineer.remote"),
      },
      requirements: [
        t("opportunities.softwareEngineer.requirements.0"),
        t("opportunities.softwareEngineer.requirements.1"),
      ],
      responsibilities: [
        t("opportunities.softwareEngineer.responsibilities.0"),
        t("opportunities.softwareEngineer.responsibilities.1"),
      ],
      skills: [t("opportunities.softwareEngineer.skills.0"), t("opportunities.softwareEngineer.skills.1")],
      languages: [t("opportunities.softwareEngineer.languages.0"), t("opportunities.softwareEngineer.languages.1")],
      benefits: [t("opportunities.softwareEngineer.benefits.0"), t("opportunities.softwareEngineer.benefits.1")],
      cultureFit: [t("opportunities.softwareEngineer.cultureFit.0"), t("opportunities.softwareEngineer.cultureFit.1")],
      postedAt: t("opportunities.softwareEngineer.postedAt"),
      validUntil: t("opportunities.softwareEngineer.validUntil"),
    },
  ]

  const technologies = [
    { description: t("opportunities.technology.modernStack") },
    { description: t("opportunities.technology.collaboration") },
    { description: t("opportunities.technology.learning") },
    { description: t("opportunities.technology.innovation") },
    { description: t("opportunities.technology.flexibility") },
  ]

  interface CardProps {
    service: {
      icon: React.ComponentType<any>
      title: string
      description: string
    }
    index: number
  }

  interface Opportunity {
    id: string
    type: string
    title: string
    summary: string
    description: string
    employmentType: string
    seniorityLevel: string
    workplaceType: string
    companyLogo: string
    location: {
      city: string
      state: string
      country: string
      remote: string
    }
    requirements: string[]
    responsibilities: string[]
    skills: string[]
    languages: string[]
    benefits: string[]
    cultureFit: string[]
    postedAt: string
    validUntil: string
  }
  interface OpportunityCardProps {
    opportunity: Opportunity
    index: number
  }

  return (
    <section className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-0 pb-0 h-[600px]"
        style={{
          backgroundImage: "url(/pages/hero-opportunities.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center bg-black/50 backdrop-blur-sm rounded-lg p-6">
            <h1 className="text-orange-400 text-orange-400 text-4xl lg:text-6xl font-bold mb-6 flex items-center justify-center">
              <Search className=" w-12 h-12 lg:w-16 lg:h-16" style={{ color: "#FFFFFF" }} />
              &nbsp;{t("opportunities.hero.title")}
            </h1>

            <p className="text-xl items-center justify-center mx-auto ">{t("opportunities.hero.subtitle")}</p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Country Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="All">All</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Portugal">Portugal</option>
                  <option value="United States">United States</option>
                  <option value="Spain">Spain</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="All locations"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Work Model Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Model</label>
                <select
                  value={selectedWorkModel}
                  onChange={(e) => setSelectedWorkModel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="All">All</option>
                  <option value="In-Person">In-Person</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="recent">Most Recent</option>
                  <option value="applications">Least Applications</option>
                  <option value="workModel">Work Model</option>
                </select>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md ${
                    viewMode === "grid" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md ${
                    viewMode === "list" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Job Results */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>

                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">
                        {job.country}, {job.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          job.workModel === "Remote"
                            ? "bg-green-100 text-green-800"
                            : job.workModel === "Hybrid"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {job.workModel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Posted {formatDate(job.postedDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{job.applications} applications</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No jobs found</div>
              <div className="text-gray-400">Try adjusting your search filters</div>
            </div>
          )}
        </div>
      </section>
    </section>
  )
}
