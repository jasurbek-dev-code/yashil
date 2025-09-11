"use client";

import { useFetchData } from "@/hooks/useFetchData";
import React, { use } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
interface Document {
  id: number;
  file: string;
  uploaded_at: string; // ISO datetime
}

interface Direction {
  id: number;
  name: string;
}

interface Sector {
  id: number;
  name: string;
  region: string;
}

interface ProjectData {
  id: number;
  name: string;
  year: number;
  direction: Direction;
  sector: Sector;
  created_at: string; // ISO datetime
  documents: Document[];
}
export default function Docs({ params }: { params: Promise<{ id: string }> }) {
  const { t, i18n } = useTranslation();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const { data, isLoading, error } = useFetchData(
    ["categories", i18n.language],
    `projects/${id}`
  );
  const result: ProjectData = data ?? {};
  console.log(result);
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      {isLoading ? (
        <div>
          <div className="w-[70px] h-[70px] border-2 border-blue-500 border-dashed rounded-full animate-spin" />
        </div>
      ) : result.documents.length ? (
        <div className="flex items-center justify-center gap-[50px] w-[1000px] py-[100px] bg-gray-100 rounded-lg">
          {result.documents.map((doc) => (
            <div key={doc.id} className="min-w-[200px] min-h-[50px] py-2 bg-white rounded-md flex items-center gap-[20px] px-4">
              <Image
                src={"/icons/document.svg"}
                width={"40"}
                height={"60"}
                alt={doc.file}
              />
              <div>
                <Link href={doc.file} className="text-[18px] text-blue-600 hover:underline cursor-pointer" target="_blank">
                  {doc.file.replace(
                    "http://yashilloyiha.uz/media/project_documents/",
                    ""
                  )}
                </Link>
                <p className="text-[14px] text-gray-500">{doc.uploaded_at.substring(0, 10)}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-[30px]">Documents not found</h1>
      )}
    </div>
  );
}
