import { Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material"
import Link from "next/link";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Hoodies = () => {
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
                      image="https://m.media-amazon.com/images/I/71fNC29PcqL._UX569_.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="p" className="font-semibold text-gray-400">
                        Hoodies
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        Black Stylish Hoddie
                      </Typography>
                      <Typography variant="p" color="text.primary">
                        ₹749
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

export default Hoodies