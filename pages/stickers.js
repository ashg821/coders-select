import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material"
import Link from "next/link";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Stickers = () => {
  return (
    <div className="container" >
      <Grid container spacing={2} mt={2}>
        {
          items.map(ele => (
            <Link href={`/product/wear-your-style`} key={ele}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345, display: { xs: 'block' }, margin: "auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images-eu.ssl-images-amazon.com/images/I/51niRI9Fh4L._SY300_SX300_QL70_FMwebp_.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="p" className="font-semibold text-gray-400">
                        STICKERS
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        Anime Paper Sticker Collection
                      </Typography>
                      <Typography variant="p" color="text.primary">
                        ₹170
                      </Typography>
                      <Typography variant="h4">
                        <Rating name="read-only" value={5} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Link>
          ))
        }
      </Grid>
    </div >
  )
}

export default Stickers