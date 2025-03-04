import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/type/BlogPost";

export default function Blogs({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div>
      <div className="relative bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-200 py-20 mb-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold  uppercase">Blogs</h2>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        {blogPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts?.map((post) => (
              <Link href={`/blog/${post?._id}`} key={post?._id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={post?.image || "/blog.webp"}
                      alt={post?.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                      {post?.title?.split(/\s+/).slice(0, 10).join(" ") + "..."}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post?.content?.split(/\s+/)?.slice(0, 20).join(" ") +
                        "..."}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post?.tags?.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 bg-gray-50 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex justify-between w-full">
                      <span>Kamanashis Biswas</span>
                      <span>{moment(post?.createdAt).format("MMM Do YY")}</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-primary text-bold text-center h-14 text-xl">
              There are no blog
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
