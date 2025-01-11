import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Paperclip } from 'lucide-react'

export default function Attachments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attachments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center space-x-2">
            <Paperclip className="h-4 w-4" />
            <span>Order_Receipt.pdf</span>
          </li>
          <li className="flex items-center space-x-2">
            <Paperclip className="h-4 w-4" />
            <span>Product_Image.jpg</span>
          </li>
        </ul>
        <Button>Upload New Attachment</Button>
      </CardContent>
    </Card>
  )
}

